import React from 'react'

// Your page component
const Page = ({ id }:any) => {
  return (
    <div>
      <h1>Playlist ID: {id}</h1>
    </div>
  )
}

// This function is used to generate the list of paths to be statically generated
export async function generateStaticParams() {
  // You need to fetch the list of available IDs for your dynamic route.
  // Here is an example of how you could do this (replace with your data source).
  const playlistIds = ['1', '2', '3']; // Replace this with actual data fetching

  // Return an array of objects where each object represents a dynamic parameter
  return playlistIds.map(id => ({
    id: id.toString(), // Ensure the id is a string
  }))
}

export default Page
