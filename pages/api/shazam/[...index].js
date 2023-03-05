export default async function handler(req, res) {

  if(req.method == 'GET'){

    
    const fetcher = async (path) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'KEY-HERE',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
      const response = await fetch(`https://shazam.p.rapidapi.com/${path}`, options);
      if(response.status == 200){
        const data = await response.json();
        // console.log(response);
        return data;
        
      }else{
        res.status(response.status).json({...response})
      }
    }

    const { index,key,id,listId,term } = req.query;
    const route = index.join('/');

    if(route == 'charts/list'){
      const data = await fetcher(route);
      res.status(200).json(data)
    }
    else if(route == 'charts/track' && listId === undefined ){
      const data = await fetcher(route);
      res.status(200).json(data)
    }
    else if(route == 'charts/track' && listId != undefined ){
      const data = await fetcher(`${route}?listId=${listId}`);
      res.status(200).json(data)
    }
    else if(route == 'search' && term != undefined ){
      const data = await fetcher(`${route}?term=${term}`);
      res.status(200).json(data)
    }
    else if(route == 'songs/get-details' && key != undefined){
      const data = await fetcher(`${route}?key=${key}`);
      res.status(200).json(data)
    }
    else if(route == 'songs/list-recommendations' && key != undefined){
      const data = await fetcher(`${route}?key=${key}`);
      res.status(200).json(data)
    }
    else if(route == 'artists/get-summary' && id != undefined){
      const data = await fetcher(`${route}?id=${id}`);
      res.status(200).json(data)
    }
    else{
      res.status(201).json({error: 'Route is not supported'})
    }

  }else{
    res.status(201).json({error: 'Method is not GET'})
  }
  
}
  