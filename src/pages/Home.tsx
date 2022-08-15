import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Header from '../components/Header'
import JWCard from '../components/JWCard'
import db from '../firebase'
import { collection, DocumentData, onSnapshot, query } from 'firebase/firestore'
import Loader from '../components/Loader'

function Home() {
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState<DocumentData[]>([])

  useEffect(() => {
    onSnapshot(query(collection(db, 'videos')), res => {
      setVideos(res.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Header />
      {loading ? <Loader /> : null}
      <Grid container spacing={4} padding={5}>
        {videos.map((video) => (
          <JWCard key={video.id} title={video.title} imgSrc={video.thumbnail} url={`/${video.id}`} />
        ))}
      </Grid>
    </>
  )
}

export default Home
