import PropTypes from 'prop-types';

const Card = ({ formData, onChange, onSubmit, title, buttonText }) => {
  return (
    <div className="min-h-auto p-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-[#393942] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">{title}</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="title" className="block text-gray-200 font-semibold w-24">Title</label>
            <input type="text" id="title" name="title" value={formData.title} required onChange={onChange} className="flex-1 p-3 border border-gray-600 rounded-lg bg-[#0c0c0d] text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="slug" className="block text-gray-200 font-semibold w-24">Slug</label>
            <input type="text" id="slug" name="slug" value={formData.slug} required onChange={onChange} className="flex-1 p-3 border border-gray-600 rounded-lg bg-[#0c0c0d] text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="content" className="block text-gray-200 font-semibold mb-2">Content</label>
            <textarea id="content" name="content" value={formData.content} required onChange={onChange} className="w-full p-3 border border-gray-600 rounded-lg bg-[#0c0c0d] text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="img_url" className="block text-gray-200 font-semibold w-24">Image URL</label>
            <input type="text" id="img_url" name="img_url" value={formData.img_url} required onChange={onChange} className="flex-1 p-3 border border-gray-600 rounded-lg bg-[#0c0c0d] text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full py-2.5 bg-green-600 text-white rounded-lg hover:bg-red-700">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    formData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

export default Card