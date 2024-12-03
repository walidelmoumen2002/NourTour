import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import whatsappLogo from '../assets/whatsappsvg.svg'

const supabaseUrl = 'https://gwjvvhdweyjjmkcesrbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3anZ2aGR3ZXlqam1rY2VzcmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NzgxNTYsImV4cCI6MjA0ODU1NDE1Nn0.QTb7c9ek_rnPP9M8uHm6fOqY0s1uXCIQ0UEBZ8VzNjU';
const supabase = createClient(supabaseUrl, supabaseKey);

const Destinations = () => {
    const [Destinations, setDestinations] = useState([]);

    const fetchData = async () => {
        let { data, error } = await supabase
            .from('Destinations')
            .select('*')

        if (error) {
            console.error('Error fetching data:', error.message);
            return;
        }
        setDestinations(data);
        // console.log('Data:', data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div id="destinations">
            <div className="container p-4 mx-auto sm:px-6 lg:px-8 pb-24">
                <h3 className="font-montserrat font-bold text-5xl text-[#f1f0e4] mb-20 mt-20 text-start">Destinations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {Destinations.map((Destination) => (
                        <div key={Destination.id} className="bg-[#f1f0e4] rounded-xl p-6 flex flex-col items-center text-center">
                            <img src={Destination.image} alt={Destination.route} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h4 className="font-montserrat font-bold text-2xl text-[#156782] mb-2">{Destination.route}</h4>
                            <p className="font-roboto font-light text-[#156782] text-xl leading-7 mb-4">{Destination.price}€</p>
                            <a href='https://api.whatsapp.com/send/?phone=%2B212638683227&text&type=phone_number&app_absent=0' target='blank' className="mt-auto flex items-center px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-[#ff9a23] border border-transparent rounded-xl hover:bg-gray-600 w-fit font-roboto" >
                                Book
                                <img src={whatsappLogo} alt="whatsapp logo" className="ml-3 w-8" />

                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Destinations
