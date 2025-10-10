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
       return []
        

    }
    else{
        storedAppData.push(id);
        localStorage.setItem('AppList', JSON.stringify(storedAppData))
    }
}

const removeApp = (id) => {

    const storedAppData = getStoredApp()
    const updatedApplist = storedAppData.filter(a=>a !== id)
    localStorage.setItem('AppList', JSON.stringify(updatedApplist))

}
export {getStoredApp, addToInstalledData, removeApp
}

