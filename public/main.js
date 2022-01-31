let n = 1;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET',`/page${n+1}`);
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300 ){
                try{
                    let array = JSON.parse(request.response)
                    array.forEach((item)=>{
                        const li = document.createElement('li')
                        li.textContent = item.id
                        pageList.appendChild(li)
                    })
                }catch(error){
                    console.log('出错了，错误详情是')
                    console.log(error)
                }
            }
        };
    };
    n+=1;
    request.send();
};

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET','5.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                let object 
                try{
                    object = JSON.parse(request.response);
                    console.log(typeof object)
                }catch(error){
                    console.log('出错了，错误详情是：')
                    console.log(error)
                    object = {'name':'no name'}  //给默认值
                };
                console.log(object);
                myName.textContent = object.name;
            }else{
                console.log('请求失败')
            };
        };
    };
    request.send();
};

getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState ===4){
            if(request.status >=200 && request.status <300){
                const xml = request.responseXML;
                const text = xml.getElementsByTagName('warning')[0].textContent;
                console.log(text.trim());
            }else{
                console.log('请求失败');
            };
        };
    };
    request.send();
};

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = ()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror =()=>{
        console.log('失败了')
    }
    request.send()
}


getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload =()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('请求失败')
    }
    request.send()
}

getCss.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if(request.status >=200 && request.status <300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
            else{
                alert('加载CSS失败')
            }
        }
    }
    request.send();
};