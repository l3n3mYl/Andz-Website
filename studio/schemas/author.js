export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'hashtag',
      title: 'Hashtag',
      type: 'string'
    },
    {
      name: 'facebook',
      title: 'Facebook Profile Link',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram Profile Link',
      type: 'string'
    },
    {
      name: 'twitter',
      title: 'Twitter Profile Link',
      type: 'string'
    },
    {
      name: 'snapchat',
      title: 'Snapchat Profile Link',
      type: 'string'
    },
    {
      name: 'street',
      title: 'Street',
      type: 'string'
    },
    {
      name: 'city',
      title: 'City and Postcode',
      type: 'string'
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'number',
      validation: Rule => Rule.min(3700000000).warning('Phone Number Must begin with 370')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
