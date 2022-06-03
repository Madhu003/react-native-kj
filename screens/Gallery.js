import React, { useEffect } from 'react';
import { StyleSheet, Button, View, TextInput, Linking, PermissionsAndroid, Platform } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
}

async function getAlbums() {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
    }

    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
    })
        .then(r => {
            console.log(r)
        })
        .catch((err) => {
            //Error Loading Images
        });

        return 'fdg'
    // return CameraRoll.getAlbums({ assetType: 'All' });
};

function Gallery({ navigation }) {
    const [number, onChangeNumber] = React.useState(null);

    // useEffect(async () => {
    //     console.log(await getAlbums());
    //     return () => console.log('clean up');
    // }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={styles.input} value={number} onChangeText={onChangeNumber} />
            <Button
                onPress={() => getAlbums()}
                title="Go1" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Gallery;