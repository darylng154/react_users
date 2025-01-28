const testExample = require('./test-example.js');
const userServices = require('../models/user/user-services.js');

test('Testing sum -- success', () => 
{
    const target = 30;
    const result = testExample.sum(12, 18);

    expect(result).toBe(target);
});

test('Testing userServices.findUserById(id) -- success', async () => 
{
    const target = {_id: 0, firstName: "Daru", lastName: "Admin"};
    const result = await userServices.findUserById(target._id);

    expect(result._id).toBe(target._id);
    expect(result.firstName).toBe(target.firstName);
    expect(result.lastName).toBe(target.lastName);
});

test('Testing userServices.findUserByFirstName(firstName) -- success', async () => 
{
    const target = {_id: 0, firstName: "Daru", lastName: "Admin"};
    const result = await userServices.findUserByFirstName(target.firstName);

    expect(result[0]._id).toBe(target._id);
    expect(result[0].firstName).toBe(target.firstName);
    expect(result[0].lastName).toBe(target.lastName);
});

test('Testing userServices.getUser(null, firstName): admin -- success', async () => 
{
    const target = {_id: 0, firstName: "Daru", lastName: "Admin"};
    const result = await userServices.getUsers(undefined, target.firstName);


    expect(result[0]._id).toBe(target._id);
    expect(result[0].firstName).toBe(target.firstName);
    expect(result[0].lastName).toBe(target.lastName);
});

test('Testing userServices.addUser() -- success', async () => 
{
    const target = {_id: 1, firstName: "Tester", lastName: "Test"};
    let result = await userServices.addUser(target);

    result = await userServices.findUserByFirstName(target.firstName);

    expect(result[0]._id).toBe(target._id);
    expect(result[0].firstName).toBe(target.firstName);
    expect(result[0].lastName).toBe(target.lastName);
});

test('Testing userServices.deleteUserById() -- success', async () => 
{
    const target = {_id: 1, firstName: "Tester", lastName: "Test"};
    result = await userServices.deleteUserById(target._id);

    expect(result._id).toBe(target._id);
    expect(result.firstName).toBe(target.firstName);
    expect(result.lastName).toBe(target.lastName);
});
