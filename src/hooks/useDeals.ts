import axios from 'axios';
import {useState, useEffect} from 'react';

interface Deal {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    tiket: string;
    yieldPercent: string;
    daysLeft: string;
    sold: string;
}

export const useDeals = () => {
    const [deals, setDeals] = useState<Deal[]>([])

    useEffect( () => {
        const getData = async () => {
            const data = await axios.get('https://zenbit-tech-task-3bf5c7096197.herokuapp.com/deals')
            const dealsArray: Deal[] = data.data
            setDeals(dealsArray)
        }
        getData()

    }, [])

    return deals
}