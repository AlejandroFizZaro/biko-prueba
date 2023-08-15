import  test  from "node:test";
import assert from "node:assert";

test ('The API call return with response 200', async ()=> {
    let resultStatus = async () => {
        return await fetch('https://dulces-petalos.herokuapp.com/api/product')
            .then( response => response.status)
        .catch(err => {
            console.log(err);
        });
    }
    assert.strictEqual( await resultStatus(), 200)
})

test ('The first result is Ophrys tenthredinifera', async ()  =>{
    let ListOfFlowers = async () => {
        return await fetch('https://dulces-petalos.herokuapp.com/api/product')
                .then( response => response.json())
        .catch(err => {
            console.log(err);
        });
    }
    assert.strictEqual( (await ListOfFlowers())[0].binomialName , 'Ophrys tenthredinifera')
} );

test ('The last result is Heliantus annuus', async () =>{
    let ListOfFlowers = async () => {
        return await fetch('https://dulces-petalos.herokuapp.com/api/product')
                .then( response => response.json())
        .catch(err => {
            console.log(err);
        });
    }
    assert.strictEqual( (await ListOfFlowers()).pop().binomialName, 'Heliantus annuus')
} );