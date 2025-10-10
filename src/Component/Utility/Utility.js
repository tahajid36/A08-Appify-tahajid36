const getStoredApp = () => {
    const storedApp = localStorage.getItem('AppList')
    if(storedApp){
        const storedAppData = JSON.parse(storedApp)
        return storedAppData;
    }
    else{
        return [];
    }
}

const addToInstalledData = (id) => {
    const storedAppData = getStoredApp()

    if(storedAppData.includes(id)){
        alert('already exists')

    }
    else{
        storedAppData.push(id);
        localStorage.setItem('AppList', JSON.stringify(storedAppData))
    }
}
export {getStoredApp, addToInstalledData
}