const changePicture = (event, setPicture) => {
    const file = event.target.files[0];

    if(file && file.type.startsWith("image/")){
        const reader = new FileReader();

        reader.onload = (e) =>{
            setPicture(e.target.result);
        }

        reader.readAsDataURL(file)
    }   
}

const updateData = (event,id,stateFunc) => {
    const value = event.target.value;
    if(id != ""){
        stateFunc((prev) => ({...prev, [id]:value})); 
    }else{
        stateFunc(value);
    }
}

export {changePicture, updateData}