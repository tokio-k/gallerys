class Gallery {
    constructor(classname,{photopadding}){
        this.classname = classname;
        this.photopadding = photopadding;
        this.doing(0);
        for(let i=0;i<this.gallerys.length;i++){
            this.doing(i);
        }
       
    }
    info(i){
        this.gallerys = document.querySelectorAll(this.classname);
        this.galleryChildren = this.gallerys[i].children;
        this.galleryCount = this.galleryChildren.length;
        const galleryFirst = this.galleryChildren[0];

        let FirstImg = galleryFirst;

        while(FirstImg.hasChildNodes()){
            FirstImg =FirstImg.firstElementChild;
        }

        this.firstWidth =FirstImg.naturalWidth;
        this.firstHeight =FirstImg.naturalHeight;
        this.styleP = this.gallerys[i].style;
        this.style1 =galleryFirst.style;
        this.gallery2 = this.galleryChildren[1];
        this.gallery3 = this.galleryChildren[2];
        this.gallery4 = this.galleryChildren[3];
        this.gallery5 = this.galleryChildren[4];

        const galleryChildArray=Array.from(this.galleryChildren);
        galleryChildArray.map((item)=>{
            item.style.padding=this.photopadding;
        })


    };
    twoOver(i){
        this.info(i);

        let thirdImg = this.gallery3;

        while(thirdImg.hasChildNodes()){
            thirdImg =thirdImg.firstElementChild;
        }

        this.ThirdW = thirdImg.naturalWidth;
        this.ThirdH = thirdImg.naturalHeight;
    };
    photos1(i){
        this.info(i)
        this.styleP.gridTemplateRows ="100%";
        this.styleP.gridTemplateColumns ="100%";
    }
    photos2(i){
        this.info(i)
        if(this.firstWidth>=this.firstHeight){
            this.styleP.gridTemplateRows ="50% 50%";
            this.styleP.gridTemplateColumns ="100%";
        }else{
            this.styleP.gridTemplateColumns ="50% 50%";
            this.styleP.gridTemplateRows ="100%";
        };
    };
    photos3(i){
        this.twoOver(i);
        this.styleP.gridTemplateColumns ="50% 50%";
            if(this.firstHeight>this.firstWidth){
                this.styleP.gridTemplateRows =" 50% 50%";
                this.style1.gridRow="1/3";
            }else if(this.firstHeight>=this.firstWidth*3/5){
                this.styleP.gridTemplateRows =" 62% 38%";
                this.style1.gridColumn="1/3";
            }else{
                this.styleP.gridTemplateRows =" 50% 50%";
                this.style1.gridColumn="1/3";
            };
    };
    photos4(i){
        this.twoOver(i);
        if(this.firstHeight*2/3>this.firstWidth){
            this.styleP.gridTemplateColumns ="57% 43%";
            this.styleP.gridTemplateRows ="repeat(3,33.33%)";
            this.style1.gridRow="1/4";
        }else if(this.firstHeight*3/4>this.firstWidth){
            this.styleP.gridTemplateColumns ="66.67% 33.33%";
            this.styleP.gridTemplateRows ="repeat(3,33.33%)";
            this.style1.gridRow="1/4";
        }else if(this.firstHeight>this.firstWidth*3/4){
            this.styleP.gridTemplateColumns ="50% 50%";
            this.styleP.gridTemplateRows ="50% 50%";
        }else if(this.firstHeight>this.firstWidth*2/3){
            this.styleP.gridTemplateColumns ="repeat(3,33.33%)";
            this.styleP.gridTemplateRows ="66.67% 33.33%";
            this.style1.gridColumn="1/4";
        }else{
            this.styleP.gridTemplateColumns ="repeat(3,33.33%)";
            this.styleP.gridTemplateRows ="71% 29%";
            this.style1.gridColumn="1/4";
        }

    };
    photos5(i){
        this.twoOver(i);
        this.style5 =this.gallery5.style;
        this.style4 =this.gallery4.style;
        this.style3 =this.gallery3.style;
        this.style2 =this.gallery2.style;

        if(this.firstHeight>this.firstWidth){
            this.styleP.gridTemplateColumns ="repeat(6,16.66%)";
            this.styleP.gridTemplateRows ="66.67% 33.33%";
            this.style1.gridColumn="1/4";
            this.style2.gridColumn="4/7";
            this.style3.gridColumn="1/3";
            this.style4.gridColumn="3/5";
            this.style5.gridColumn="5/7";
        }else if(this.firstHeight>this.firstWidth*2/3){
            if(this.ThirdH>this.ThirdW){
                this.styleP.gridTemplateColumns ="repeat(6,16.66%)";
                this.styleP.gridTemplateRows ="50% 50%";
                this.style1.gridColumn="1/4";
                this.style2.gridColumn="4/7";
                this.style3.gridColumn="1/3";
                this.style4.gridColumn="3/5";
                this.style5.gridColumn="5/7";
            }else{
                this.styleP.gridTemplateRows ="repeat(6,16.66%)";
                this.styleP.gridTemplateColumns="50% 50%";
                this.style1.gridRow="1/4";
                this.style2.gridRow="4/7";
                this.style3.gridRow="1/3";
                this.style4.gridRow="3/5";
                this.style5.gridRow="5/7";
            };
        }else{
            this.styleP.gridTemplateColumns ="66.67% 33.33%";
            this.styleP.gridTemplateRows ="repeat(6,16.66%)";
            this.style1.gridRow="1/4";
            this.style2.gridRow="4/7";
            this.style3.gridRow="1/3";
            this.style4.gridRow="3/5";
            this.style5.gridRow="5/7";

        };
    };
    photosOther(i){
        this.info(i);
        this.galleryChildren[4].classList.add("more");
        const text = `＋${this.galleryChildren.length-5}`;
        this.galleryChildren[4].insertAdjacentHTML('beforeend', `<p><a href="#">${text}</a></p>`);
        for(let e=5;e<this.galleryChildren.length;e++){
            this.galleryChildren[e].style.display="none";
        };
        this.photos5(i);
    }
    doing(i){
        this.info(i)
        switch(this.galleryCount){
            case 1:
                this.photos1(i);
                break;
            case 2:
                this.photos2(i);
                break;
            case 3:
                this.photos3(i);
                break;
            case 4:
                this.photos4(i);
                break;
            case 5:
                this.photos5(i);
                break;
            default:
                this.photosOther(i);
                break;
        }
    }
};