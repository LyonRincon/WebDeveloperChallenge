/// <summary>
///   Calls the jokes api and returns the result as is
/// </summary>
///

const fetchJokes = async () => {
  try {
    const response = await fetch(`https://official-joke-api.appspot.com/random_ten`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching jokes:', error);
  }
};

export { fetchJokes };
