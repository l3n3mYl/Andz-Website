import client, { getClient } from "../../lib/sanity";
import Image from "../../components/HandleImages/Image";
import Layout from "../../components/Layout";
import { getAuthorInfo, getSlugProject } from "../../lib/api";
import styles from "../../styles/css/single_project.module.css";
import SanityBlockContent from "@sanity/block-content-to-react";

const SingleProject = ({ author, project }) => {
  let currProject;

  if (project) currProject = project;

  return currProject ? (
    <Layout title={project.slug.current} author={author}>
      <div className={styles.innerDiv}>
        <div className={styles.content}>
          <h1 className={styles.title}>{project.title}</h1>
          <h2 className={styles.subtitle}>{project.subtitle}</h2>
          {project.body && (
            <div className={styles.body}>
              <SanityBlockContent
                blocks={project.body}
                imageOptions={{ fit: "max" }}
                {...client.config()}
              />
            </div>
          )}
          {project.images.map((image, i) => {
            return (
              <div className={styles.photos} key={i}>
                <div className={styles.singleImage}>
                  <Image image={image} alt="" paddingTop={0} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  ) : null;
};

export const getStaticPaths = async () => {
  const url = `*[_type == "project"].slug.current`;
  const slug = await getClient().fetch(url);

  return {
    paths: slug.map((s) => ({ params: { slug: s || "" } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const project = await getSlugProject(slug);
  const author = await getAuthorInfo();

  if (project) {
    return {
      props: { author, project },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default SingleProject;
