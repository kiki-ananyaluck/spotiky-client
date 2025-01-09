'use client'
import { getPopularArtist } from '@/_service/getArtist';
import { useState, useEffect } from 'react';


interface getRequestDataProps {
  accessToken: string
}

interface Artist {
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
}

export function useGetPopularArtist({
  accessToken
}: getRequestDataProps) {
  const [getArtist, setGetArtist] = useState<Artist[]>([]);

  const fetchData = async () => {
    if (accessToken) {
      try {
        const response = await getPopularArtist(accessToken)
        if (response?.status === 200) {
          const data = response.data.data;
          setGetArtist(data || []);
        }
      } catch (error) {
        console.log("Error from searchRequest()", error);
        setGetArtist([]);
      } finally {
      }
    }
  };


  useEffect(() => {
    fetchData();
  }, [accessToken,fetchData]);

  return { getArtist, setGetArtist };
}
