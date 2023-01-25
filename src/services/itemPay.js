
async function getById(id) {
    const item = await Pay.findById(id).where({ isDeleted: false }); //във view работи с {{id}}
    if (item) {
        return item;
    } else {
        return undefined;
    }
}