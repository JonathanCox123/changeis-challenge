import { faker } from '@faker-js/faker';

export const getFakeData = () => {
    return {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
    };
};
