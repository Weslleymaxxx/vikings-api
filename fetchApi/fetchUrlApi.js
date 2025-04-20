export const fetchApi = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=vikings');
    const res = await req.json();

    return res
}
