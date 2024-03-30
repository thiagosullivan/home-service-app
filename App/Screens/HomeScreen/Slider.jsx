import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
            console.log("resp", resp.sliders)
            setSlider(resp?.slider)
        });
    }
    

    return (
        <View>
            <Text >Offers for You</Text>
            <FlatList
                data={slider}
                renderItem={({item, index}) => (
                    <View key={index}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}