import React from 'react'
import NavbarCom from './NavbarCom'
import { Button, Grid, Image, Text } from '@nextui-org/react'


interface Articles {
    title: string,
    description: string,
    urlvideo: string | null,
    images: string[] | null
    videos: string[] | null
}


export default function Article({ title, description, urlvideo, images, videos }: Articles) {
    return (
        <>
            <NavbarCom />
            <div className="digital-contain">
                <Text h1 css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                    weight="bold">

                    {title}
                </Text>
                <Text css={{ width: '70%' }}>

                    {description}
                </Text>
                <div className="video-cont">
                    {urlvideo!= null && 
                    <iframe src={`https://www.youtube.com/embed/${urlvideo}?autoplay=0`} width={'100%'} height='450px'
                        frameBorder='0'></iframe>
                    }
                </div>
                {videos != null &&
                    <Grid.Container gap={3} justify="center">
                        {videos.map((content, index) => (
                            <Grid key={index} xs={12} sm={6}>
                                <iframe src={`https://www.youtube.com/embed/${content}`} width={'100%'} height='350px'
                                    frameBorder='0'></iframe>
                            </Grid>
                        ))}
                    </Grid.Container>
                }

                {images != null &&
                    <Grid.Container gap={3} justify="center">
                        {images.map((content, index) => (
                            <Grid key={index} xs={12} sm={6}>
                                    <Image src={content}></Image>
                            </Grid>
                        ))}
                    </Grid.Container>
                }

            </div>
        </>
    )
}
