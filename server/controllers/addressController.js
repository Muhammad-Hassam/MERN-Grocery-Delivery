import Address from "../models/Address.js";

export const addAddresss = async () => {
  try {
    const { address, userId } = req.body;
    await Address.create({ ...address, userId });
    resizeBy.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
