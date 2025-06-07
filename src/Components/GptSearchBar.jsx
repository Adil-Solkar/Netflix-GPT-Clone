const GptSearchBar = () => {
  return (
    <div className="flex justify-center mt-25 gap-2">
      <input type="text" name="Search" placeholder="Search movies"
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">search</button>
    </div>
  )
}

export default GptSearchBar