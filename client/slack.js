const xmlhttp = new XMLHttpRequest();
const url = "http://slack-server.elasticbeanstalk.com/messages";

xmlhttp.onreadystatechange = function() {
  const idContainer = [];
  const createdBy = [];
  const message = [];
  const createdAt = [];
  const time = [];

  function getData(obj){
  idContainer.push(obj._id);
  createdBy.push(obj.created_by);
  message.push(obj.message);
  createdAt.push(obj.created_at.slice(0,10));
  time.push(obj.created_at.slice(12,17));
  }

    if (this.readyState == 4 && this.status == 200) {
        const myArr = JSON.parse(this.responseText);
        console.log(myArr);
        // console.log(myArr);

        for(let i = 0; i < myArr.length; i++){
          getData(myArr[i]);
      }


    }

      messageInsert(idContainer,createdBy,message,createdAt,time)

       // console.log(idContainer)
     // console.log(createdBy)
     // console.log(message)
     // console.log(createdAt)
     // console.log(time)
     // console.log(createdBy);

};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function createNode (element){
  return document.createElement(element);

}

function append(parent, child){
  return parent.appendChild(child);
}



function messageInsert (arrID, arrCreatedBy, arrMessage, arrCreatedAt, arrTime) {


  for(let i = arrID.length -1; i > 0; i--){
    const p = createNode('p');

    if(arrCreatedBy[i] !== arrCreatedBy[i-1] || arrCreatedAt[i] !== arrCreatedAt[i-1]){
    console.log(arrMessage[i]);
      let delta = timeConverter(arrTime[i]) - timeConverter(arrTime[i -1])


        const messageContainer = createNode('div')
        messageContainer.setAttribute('class','messageContainer')
        append(mainDiv, messageContainer)
         p.append(arrMessage[i]);
        append(messageContainer, p);
    }
  }

  // const div = createNode('div');
  // const p = createdNode('p')
  // const div = createNode('div');




    // const p = createNode('p')
    // const div = createNode('div');
    // const mainDiv = document.getElementById('mainDiv');

    // append(mainDiv,div)
    // append(div,p)
    // p.append(arr[i]);

    // document.body.appendChild(div);

}

function timeConverter (timeEle){
  let num = timeEle.split(":").join('');
  num = Number(num);
  return num
};
