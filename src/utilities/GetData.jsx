export const getData = async (type_of_file) => {
    const res = await fetch(`assets/dnd5e_Data/5e-SRD-${type_of_file}.json`)
    const data = await res.json();
    return data
};
