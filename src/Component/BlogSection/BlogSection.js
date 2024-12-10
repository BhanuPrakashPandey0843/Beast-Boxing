import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Group Meeting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      title: 'Business Lecturer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      title: 'Business Meeting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      image: 'https://via.placeholder.com/400x250',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-yellow-600 font-semibold tracking-widest uppercase">Our Blog</h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            A wonderful serenity has taken possession of my entire soul
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Discover stories, tips, and updates from our latest news and events.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <img className="w-full h-56 object-cover" src={blog.image} alt={blog.title} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{blog.title}</h3>
                <p className="mt-4 text-gray-600">{blog.description}</p>
                <div className="mt-6">
                  <a href="/" className="text-yellow-600 hover:text-yellow-500 font-medium inline-block">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
