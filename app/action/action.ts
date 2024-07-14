'use server';

import prisma from "../lib/dbConnect";

async function saveYourAirbnb(propertyData) {
    try {
        const plainData = JSON.parse(JSON.stringify(propertyData));
        const propertyInfo = await prisma.property.create({
            data: plainData,
        });
        console.log("propertyInfo", propertyInfo);
        return {
            message: "successfully saved",
            data: propertyInfo,
        };
    } catch (err) {
        return {
            message: "failed to save property and database user",
            err,
        };
    }
}

export default saveYourAirbnb;
