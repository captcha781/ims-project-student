const fileObjectUrl = (fileImage) => {
    try {
        return URL.createObjectURL(fileImage)
    }
    catch (err) {
        return fileImage
    }
}

export default fileObjectUrl;