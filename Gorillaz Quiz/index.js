let bandMembers = { twoD: 0, murdoc: 0, rusell: 0, noodle: 0 };
let globalKey = null;
let globalVal = -1;

const inc2D = function() 
{
    bandMembers.twoD++;
    console.log("2D bandMembers: " + bandMembers.twoD);
    topBoy();
}

const incMurdoc = function()
{
    bandMembers.murdoc++;
    console.log("Murdoc bandMembers: " + bandMembers.murdoc);
    topBoy();
}

 const incRusell = function()
{
    bandMembers.rusell++;
    console.log("Rusell bandMembers: " + bandMembers.rusell);
    topBoy();
}

 const incNoodle = function()
{
    bandMembers.noodle++
    console.log("Noodle bandMembers: " + bandMembers.noodle);
    topBoy();
}

const topBoy = function()
{
    let topKey = null;
    let topVal = -1;
    for (let [key, value] of Object.entries(bandMembers)) 
    {
        console.log(`${key}: ${value}`);
        if (value > topVal)
        {
            topKey = key;
            topVal = value;
        }
    }
    globalKey = topKey;
    globalVal = topVal;
    console.log("Global Key: " + globalKey);
    console.log("Global value: " + globalVal);

    switch (globalKey)
    {
        case "twoD":
        {
            document.getElementById('myImage').src='2D.png';
            break;
        }

        case "murdoc":
        {
            document.getElementById('myImage').src='Murdoc.png';
            break;
        }

        case "rusell":
        {
            document.getElementById('myImage').src='Rusell.png';
            break;
        }

        case "noodle":
        {
            document.getElementById('myImage').src='Noodle.png';
            break;
        }
    }

}
