export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
          name: 'photoAmount',
          title: 'Amount of Photos',
          type: 'number'
      },
      {
          name: 'hourAmount',
          title: 'Amount of Hours',
          type: 'number'
      },
      {
          name: 'price',
          title: 'Price for Service',
          type: 'number'
      },
      {
        name: 'image',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'image'
    }
  }
}
  