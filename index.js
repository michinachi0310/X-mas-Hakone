
        // ========== TOP
        //1.5秒かけ黒色背景を表示
        gsap.to(".top-background-color", {
        duration: 1, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
        });

        //.textを1.5秒かけ出現させ1.5秒かけ逆再生させ初期状態に戻す
        gsap.to(".top-text", {
        delay: 1, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
        duration: 1, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
        y: "0px", //cssでY軸-20pxから完了時0pxへの指定
        yoyo: true, //trueにすることで上記で指定したY軸の動きの逆再生
        repeat: 1, //yoyoのリピート回数
        //同じclass名のバリデーションの設定
        stagger: {
            each: 0.5, //ディレイ時間
        },
        });

        //初期遅延3.5秒かけてから.titleを表示
        gsap.to(".top-title span", {
        delay: 4.5, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
        duration: 1.5, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
        //同じclass名のバリデーションの設定
        stagger: {
            each: 0.2, //ディレイ時間
            from: "start", //出現方法の指定
        },
        });
        // ========== TOP


        // ==========ほし
        particlesJS("particles-js", {
            "particles":{
                "number":{
                    "value":500,//この数値を変更すると星の数が増減できる
                    "density":{
                        "enable":true,
                        "value_area":800
                    }
                },
                "color":{
                    "value":"#ffffff"
                },
                "shape":{
                    "type":"circle",//形状はcircleを指定
                    "stroke":{
                        "width":0
                    },
                    },
                "opacity":{
                    "value":1,//シェイプの透明度
                    "random":true,//シェイプの透明度をランダムにする
                    "anim":{
                        "enable":true,//シェイプの透明度をアニメーションさせる
                        "speed":3,//シェイプの透明度をアニメーションさせる
                        "opacity_min":0,//透明度の最小値０
                        "sync":false//全てを同時にアニメーションさせない
                    }
                },
                "size":{
                    "value":2,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":4,
                        "size_min":0.3,
                        "sync":false
                    }
                },
                "line_linked":{
                    "enable":false,
                },
                "move":{
                    "enable":true,
                    "speed":120,//この数値を小さくするとゆっくりな動きになる
                "direction":"none",//方向指定なし
                "random":true,//動きはランダムに
                "straight":true,//動きをとどめる
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":600
                    }
                }
            },
            "interactivity":{
                "detect_on":"canvas",
                "events":{
                    "onhover":{
                        "enable":false,
                    },
                    "onclick":{
                        "enable":false,
                    },
                    "resize":true
                }
            },
            "retina_detect":true
        });
        particlesJS("particles-js-2", {
            "particles":{
                "number":{
                    "value":500,//この数値を変更すると星の数が増減できる
                    "density":{
                        "enable":true,
                        "value_area":800
                    }
                },
                "color":{
                    "value":"#ffffff"
                },
                "shape":{
                    "type":"circle",//形状はcircleを指定
                    "stroke":{
                        "width":0
                    },
                    },
                "opacity":{
                    "value":1,//シェイプの透明度
                    "random":true,//シェイプの透明度をランダムにする
                    "anim":{
                        "enable":true,//シェイプの透明度をアニメーションさせる
                        "speed":3,//シェイプの透明度をアニメーションさせる
                        "opacity_min":0,//透明度の最小値０
                        "sync":false//全てを同時にアニメーションさせない
                    }
                },
                "size":{
                    "value":2,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":4,
                        "size_min":0.3,
                        "sync":false
                    }
                },
                "line_linked":{
                    "enable":false,
                },
                "move":{
                    "enable":true,
                    "speed":120,//この数値を小さくするとゆっくりな動きになる
                "direction":"none",//方向指定なし
                "random":true,//動きはランダムに
                "straight":true,//動きをとどめる
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":600
                    }
                }
            },
            "interactivity":{
                "detect_on":"canvas",
                "events":{
                    "onhover":{
                        "enable":false,
                    },
                    "onclick":{
                        "enable":false,
                    },
                    "resize":true
                }
            },
            "retina_detect":true
        });
        particlesJS("particles-js-3", {
            "particles":{
                "number":{
                    "value":500,//この数値を変更すると星の数が増減できる
                    "density":{
                        "enable":true,
                        "value_area":800
                    }
                },
                "color":{
                    "value":"#ffffff"
                },
                "shape":{
                    "type":"circle",//形状はcircleを指定
                    "stroke":{
                        "width":0
                    },
                    },
                "opacity":{
                    "value":1,//シェイプの透明度
                    "random":true,//シェイプの透明度をランダムにする
                    "anim":{
                        "enable":true,//シェイプの透明度をアニメーションさせる
                        "speed":3,//シェイプの透明度をアニメーションさせる
                        "opacity_min":0,//透明度の最小値０
                        "sync":false//全てを同時にアニメーションさせない
                    }
                },
                "size":{
                    "value":2,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":4,
                        "size_min":0.3,
                        "sync":false
                    }
                },
                "line_linked":{
                    "enable":false,
                },
                "move":{
                    "enable":true,
                    "speed":120,//この数値を小さくするとゆっくりな動きになる
                "direction":"none",//方向指定なし
                "random":true,//動きはランダムに
                "straight":true,//動きをとどめる
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":600
                    }
                }
            },
            "interactivity":{
                "detect_on":"canvas",
                "events":{
                    "onhover":{
                        "enable":false,
                    },
                    "onclick":{
                        "enable":false,
                    },
                    "resize":true
                }
            },
            "retina_detect":true
        });
        particlesJS("particles-js-4", {
            "particles":{
                "number":{
                    "value":500,//この数値を変更すると星の数が増減できる
                    "density":{
                        "enable":true,
                        "value_area":800
                    }
                },
                "color":{
                    "value":"#ffffff"
                },
                "shape":{
                    "type":"circle",//形状はcircleを指定
                    "stroke":{
                        "width":0
                    },
                    },
                "opacity":{
                    "value":1,//シェイプの透明度
                    "random":true,//シェイプの透明度をランダムにする
                    "anim":{
                        "enable":true,//シェイプの透明度をアニメーションさせる
                        "speed":3,//シェイプの透明度をアニメーションさせる
                        "opacity_min":0,//透明度の最小値０
                        "sync":false//全てを同時にアニメーションさせない
                    }
                },
                "size":{
                    "value":2,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":4,
                        "size_min":0.3,
                        "sync":false
                    }
                },
                "line_linked":{
                    "enable":false,
                },
                "move":{
                    "enable":true,
                    "speed":120,//この数値を小さくするとゆっくりな動きになる
                "direction":"none",//方向指定なし
                "random":true,//動きはランダムに
                "straight":true,//動きをとどめる
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":600
                    }
                }
            },
            "interactivity":{
                "detect_on":"canvas",
                "events":{
                    "onhover":{
                        "enable":false,
                    },
                    "onclick":{
                        "enable":false,
                    },
                    "resize":true
                }
            },
            "retina_detect":true
        });
        //==========ほし
        


        const wrapper = document.querySelector('#wrapper');
        if(wrapper) {
            // gsap.registerPlugin(ScrollTrigger); // npm/yarnの際に必要
            const panels = gsap.utils.toArray('.panel');
            const wrapperWidth = wrapper.offsetWidth;
            /**
            * 横スクロール開始
            */
            gsap.to( panels, {
                xPercent: -100 * (panels.length - 1), // transformX
                ease: "none", // easingの設定
                scrollTrigger: { // scrollTrigger
                    trigger: wrapper, // アニメーションの対象となる要素
                    pin: true, // 要素を固定する
                    scrub: 1, // スクロールとアニメーションを同期させる。数値で秒数の設定に
                    snap: { // スナップスクロールにする
                        snapTo: 1 / ( panels.length - 1 ), // スナップで移動させる位置
                        duration: {min: .4, max: .6}, // スナップで移動する際の遅延時間
                        ease: "none" // easing
                    },
                    end: () => "+=" + wrapperWidth // アニメーションの終了タイミング
                }
            })
            const anchors = document.querySelectorAll(this.anchor);
            let index = '';
            anchors.forEach( (anchor) => {
                anchor.addEventListener( 'click', (e) => {
                    e.preventDefault();
                    index = [].slice.call(anchors).indexOf(anchor); // 何番目のアンカーリンクをクリックしたか取得
                    const target = document.querySelector(e.currentTarget.querySelector('a').getAttribute('href')); // クリックしたアンカーリンクに紐づくpanelを取得
                    const scrollbarWidth = window.innerWidth - document.body.clientWidth; // スクロールバーの長さを取得
                    const wrapperOffset = target.offsetLeft * ( wrapper.clientWidth / ( wrapper.clientWidth - window.innerWidth ) ) + scrollbarWidth * index; // 移動位置を取得
                    gsap.to(window, {
                        scrollTo: {
                            y: wrapperOffset,
                            autoKill: false
                        },
                        duration: 1
                    });
                });
            });
        }
    