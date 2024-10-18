// schemas/project.js

export const projects = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Enter the title of the project',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'Provide a brief description of the project',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for cropping the image
      },
      description: 'Upload the main image representing the project',
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
      description: 'Provide the URL link to the project',
    },
  ],
};
