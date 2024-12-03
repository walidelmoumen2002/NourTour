import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import tripadvisor from '../assets/tripadvisor.svg'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
const supabaseUrl = 'https://gwjvvhdweyjjmkcesrbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3anZ2aGR3ZXlqam1rY2VzcmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NzgxNTYsImV4cCI6MjA0ODU1NDE1Nn0.QTb7c9ek_rnPP9M8uHm6fOqY0s1uXCIQ0UEBZ8VzNjU';
const supabase = createClient(supabaseUrl, supabaseKey);
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const Comments = () => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        let { data, error } = await supabase
            .from('Comments')
            .select('*');

        if (error) {
            console.error('Error fetching data:', error.message);
            return;
        }
        setComments(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col lg:flex-row lg:container mx-auto font-montserrat p-4 md:p-16'>
            <div className='m-auto space-y-1 text-center'>
                <h3 className="font-bold text-3xl md:text-5xl text-[#156782]">Excellent</h3>
                <div className="flex items-center justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                            <FaStar color='#ff9a23' className="text-xl md:text-3xl" />
                        </span>
                    ))}
                </div>
                <p className='text-gray-800 text-lg md:text-xl'>Based on <b>33 reviews</b></p>
                <img src={tripadvisor} alt="tripadvisor" className='w-24 h-auto md:w-36 mt-6 mx-auto' />
            </div>
            <Carousel
                className="bg-[#f1f0e4] w-full md:1/2 lg:w-4/6 mx-auto mt-8 md:mt-0"
                opts={{
                    align: "center",
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}>
                <CarouselContent className="p-4  md:p-10 lg:-ml-2">
                    {
                        comments.map((comment) => (
                            <CarouselItem
                                key={comment.id}
                                className="bg-white shadow-md rounded-lg p-4 md:p-6 ml-4 md:ml-6 flex flex-col items-center space-y-4 sm:basis-1 md:basis-1/2 lg:basis-1/3 min-h-64"
                            >
                                {/* Profile Header */}
                                <div className="flex items-center">
                                    <img
                                        src={comment.avatar}
                                        alt={comment.name}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-2"
                                    />
                                    <div>
                                        <p className="font-bold text-md md:text-lg text-gray-800">{comment.name}</p>
                                        <p className="text-sm text-gray-500">{comment.date}</p>
                                    </div>
                                </div>
                                {/* Stars */}
                                <div className="flex items-center space-x-1">
                                    {Array.from({ length: comment.stars }).map((_, i) => (
                                        <span key={i}>
                                            <FaStar color='#ff9a23' />
                                        </span>
                                    ))}
                                    <span className="ml-2 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                                        <MdVerified />
                                    </span>
                                </div>
                                <div>
                                    {comment.commentBody.length > 100 ? (
                                        <p className='text-sm'>
                                            {comment.showMore ? comment.commentBody : `${comment.commentBody.substring(0, 100)}...`}
                                            <button
                                                onClick={() => {
                                                    setComments(comments.map(c => c.id === comment.id ? { ...c, showMore: !c.showMore } : c));
                                                }}
                                                className='text-blue-500 ml-2'
                                            >
                                                {comment.showMore ? 'Read Less' : 'Read More'}
                                            </button>
                                        </p>
                                    ) : (
                                        <p className='text-sm'>{comment.commentBody}</p>
                                    )}
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className='hidden md:flex' />
                <CarouselNext className='hidden md:flex' />
            </Carousel>
        </div>
    );
};

export default Comments;