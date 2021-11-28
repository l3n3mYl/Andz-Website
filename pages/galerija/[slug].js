import { getClient } from "../../lib/sanity";
import IndividualProject from "../../components/Layouts/IndividualProject";
import Layout from "../../components/Layout";
import { getAuthorInfo, getSlugProject } from "../../lib/api";

const SingleProject = ({ author, project }) => {
  let currProject;

  if (project) currProject = project

  return currProject ? (
    <Layout title={project.slug.current} author={author}>
      <IndividualProject images={currProject.images} project={project} />
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
