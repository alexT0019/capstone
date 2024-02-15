// import 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs'
// import 'https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd'


const classes = {
   "person":"人",
   "bicycle":"自行車",
   "car":"車",
   "motorcycle":"摩托車",
   "airplane":"飛機",
   "bus":"公車",
   "train":"火車",
   "truck":"卡車",
   "boat":"船",
   "traffic light":"紅綠燈",
   "fire hydrant":"消防栓",
   "stop sign":"停止標誌",
   "parking meter":"停車收費表",
   "bench":"長椅",
   "bird":"鳥",
   "cat":"貓",
   "dog":"狗",
   "horse":"馬",
   "sheep":"羊",
   "cow":"乳牛",
   "elephant":"大象",
   "bear":"熊",
   "zebra":"斑馬",
   "giraffe":"長頸鹿",
   "backpack":"背包",
   "umbrella":"傘",
   "handbag":"手提包",
   "tie":"領帶",
   "suitcase":"行李箱",
   "frisbee":"飛盤",
   "skis":"滑雪板",
   "snowboard":"滑雪板",
   "sports ball":"運動球",
   "kite":"風箏",
   "baseball bat":"棒球棒",
   "baseball glove":"棒球手套",
   "skateboard":"滑板",
   "surfboard":"衝浪板",
   "tennis racket":"網球拍",
   "bottle":"瓶子",
   "wine glass":"紅酒杯",
   "cup":"杯子",
   "fork":"叉",
   "knife":"刀",
   "spoon":"湯匙",
   "bowl":"碗",
   "banana":"香蕉",
   "apple":"蘋果",
   "sandwich":"三明治",
   "orange":"橘子",
   "broccoli":"綠色花椰菜",
   "carrot":"紅蘿蔔",
   "hot dog":"熱狗",
   "pizza":"披薩",
   "donut":"油炸圈餅",
   "cake":"蛋糕",
   "chair":"椅子",
   "couch":"長椅",
   "potted plant":"盆栽",
   "bed":"床",
   "dining table":"餐桌",
   "toilet":"洗手間",
   "tv":"電視",
   "laptop":"筆記型電腦",
   "mouse":"老鼠",
   "remote":"偏僻的",
   "keyboard":"鍵盤",
   "cell phone":"智慧型手機",
   "microwave":"微波",
   "oven":"烤箱",
   "toaster":"烤麵包機",
   "sink":"下沉",
   "refrigerator":"冰箱",
   "book":"書",
   "clock":"鐘",
   "vase":"花瓶",
   "scissors":"剪刀",
   "teddy bear":"玩具熊",
   "hair drier":"吹風機",
   "toothbrush":"牙刷"
}

export default classes