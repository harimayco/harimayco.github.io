const garena_cdn = 'https://cdngarenanow-a.akamaihd.net/webmain/static/resource/wallpaper/hero/';
var wp_data = [{"name":"牛魔王","value":"toro","tag":"tank","skinsCount":3,"bgCount":3},{"name":"拉茲","value":"raz","tag":"mage","skinsCount":4,"bgCount":4},{"name":"瑟斐斯","value":"zephys","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"薇菈","value":"veera","tag":"mage","skinsCount":5,"bgCount":5},{"name":"堇","value":"violet","tag":"archer","skinsCount":7,"bgCount":7},{"name":"勇","value":"yorn","tag":"archer","skinsCount":5,"bgCount":5},{"name":"歐米茄","value":"omega","tag":"tank","skinsCount":2,"bgCount":2},{"name":"刀鋒寶貝","value":"butterfly","tag":"assassin","skinsCount":7,"bgCount":7},{"name":"美娜","value":"mina","tag":"tank","skinsCount":3,"bgCount":3},{"name":"阿茲卡","value":"azzenka","tag":"mage","skinsCount":3,"bgCount":3},{"name":"呂布","value":"lubu","tag":"warrior","skinsCount":6,"bgCount":6},{"name":"趙雲","value":"zanis","tag":"warrior","skinsCount":5,"bgCount":5},{"name":"凡恩","value":"valhein","tag":"archer","skinsCount":6,"bgCount":6},{"name":"薩尼","value":"thane","tag":"tank","skinsCount":3,"bgCount":3},{"name":"盧蜜亞","value":"ilumia","tag":"mage","skinsCount":3,"bgCount":3},{"name":"蘿兒","value":"lauriel","tag":"mage","skinsCount":5,"bgCount":5},{"name":"納克羅斯","value":"nakroth","tag":"assassin","skinsCount":5,"bgCount":5},{"name":"貂蟬","value":"diaochan","tag":"mage","skinsCount":4,"bgCount":4},{"name":"阿萊斯特","value":"aleister","tag":"mage","skinsCount":3,"bgCount":3},{"name":"悟空","value":"wukong","tag":"assassin","skinsCount":4,"bgCount":4},{"name":"克里希","value":"krixi","tag":"mage","skinsCount":6,"bgCount":6},{"name":"哥德爾","value":"gildur","tag":"tank","skinsCount":2,"bgCount":2},{"name":"卡莉","value":"kahli","tag":"mage","skinsCount":4,"bgCount":4},{"name":"查戈納爾","value":"chaugnar","tag":"support","skinsCount":3,"bgCount":3},{"name":"渥馬爾","value":"ormarr","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"愛麗絲","value":"alice","tag":"support","skinsCount":3,"bgCount":3},{"name":"穆加爵","value":"mganga","tag":"mage","skinsCount":3,"bgCount":3},{"name":"馬洛斯","value":"maloch","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"塔拉","value":"taara","tag":"tank","skinsCount":3,"bgCount":3},{"name":"普雷塔","value":"preyta","tag":"mage","skinsCount":3,"bgCount":3},{"name":"克萊斯","value":"cresht","tag":"tank","skinsCount":3,"bgCount":3},{"name":"菲尼克","value":"fennik","tag":"archer","skinsCount":3,"bgCount":3},{"name":"夸克","value":"grakk","tag":"tank","skinsCount":3,"bgCount":3},{"name":"娜塔亞","value":"natalya","tag":"mage","skinsCount":5,"bgCount":5},{"name":"朗博","value":"lumburr","tag":"support","skinsCount":2,"bgCount":2},{"name":"金納","value":"jinna","tag":"mage","skinsCount":3,"bgCount":3},{"name":"佩娜","value":"payna","tag":"support","skinsCount":2,"bgCount":2},{"name":"莫托斯","value":"arthur","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"科里納卡","value":"kriknak","tag":"assassin","skinsCount":3,"bgCount":3},{"name":"愛里","value":"airi","tag":"warrior","skinsCount":6,"bgCount":6},{"name":"蝙蝠俠","value":"batman","tag":"assassin","skinsCount":2,"bgCount":2},{"name":"史蘭茲","value":"slimz","tag":"archer","skinsCount":3,"bgCount":3},{"name":"司科德","value":"skud","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"祖卡","value":"zuka","tag":"warrior","skinsCount":5,"bgCount":5},{"name":"莫拉","value":"murad","tag":"assassin","skinsCount":6,"bgCount":6},{"name":"特爾安娜絲","value":"telannas","tag":"archer","skinsCount":5,"bgCount":5},{"name":"齊爾","value":"qier","tag":"mage","skinsCount":2,"bgCount":4},{"name":"伊耿士","value":"ignis","tag":"mage","skinsCount":2,"bgCount":2},{"name":"小丑","value":"joker","tag":"archer","skinsCount":2,"bgCount":2},{"name":"超人","value":"superman","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"凱格路士","value":"kilgroth","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"贊尼爾","value":"xeniel","tag":"tank","skinsCount":3,"bgCount":3},{"name":"阿杜恩","value":"arduin","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"龍馬","value":"longma","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"艾翠絲","value":"aicuisi","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"摩恩","value":"moen","tag":"archer","skinsCount":2,"bgCount":2},{"name":"神力女超人","value":"wonderwoman","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"圖倫","value":"tulun","tag":"mage","skinsCount":5,"bgCount":5},{"name":"琳蒂","value":"lindi","tag":"archer","skinsCount":3,"bgCount":3},{"name":"提米","value":"timi","tag":"support","skinsCount":2,"bgCount":2},{"name":"夜叉","value":"yecha","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"麥克思","value":"maikesi","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"莉莉安","value":"lilian","tag":"mage","skinsCount":4,"bgCount":4},{"name":"靈靈","value":"lingling","tag":"archer","skinsCount":3,"bgCount":3},{"name":"艾瑞","value":"airui","tag":"tank","skinsCount":3,"bgCount":3},{"name":"洛克","value":"luoke","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"諾克西","value":"nuokexi","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"伯頓","value":"bodun","tag":"tank","skinsCount":2,"bgCount":2},{"name":"瑪迦","value":"majia","tag":"mage","skinsCount":2,"bgCount":2},{"name":"艾蜜莉","value":"aimili","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"安奈特","value":"annaite","tag":"support","skinsCount":2,"bgCount":2},{"name":"古木","value":"gumu","tag":"tank","skinsCount":2,"bgCount":2},{"name":"蘇","value":"su","tag":"archer","skinsCount":3,"bgCount":3},{"name":"瑞克","value":"ruike","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"瀾","value":"lan","tag":"mage","skinsCount":2,"bgCount":2},{"name":"奎倫","value":"kuilun","tag":"assassin","skinsCount":2,"bgCount":2},{"name":"達爾西","value":"daerxi","tag":"mage","skinsCount":2,"bgCount":2},{"name":"卡芬妮","value":"kafenni","tag":"archer","skinsCount":2,"bgCount":2},{"name":"緋淚","value":"feilei","tag":"warrior","skinsCount":2,"bgCount":2}];


$(function(){
	//render bg thumbs
	render_thumbnails('bg', $('#bg-wrapper'), '.jpg');
	//render skins thumb
	render_thumbnails('skins', $('#skin-wrapper'));
});

function render_thumbnails(type, container){
	var html = '';
	var i = 1;
	$.each(wp_data, function(i, data){
		html = '';
		for(var x=1;x<=data[type+'Count'];x++){
			//html = html + 'test';
			html = html + '<img data-hero="'+data['value']+'" data-number='+x+' data-sub="'+type+'" class="'+type+' '+type+'-'+data['value']+'" src="'+garena_cdn+data['value']+'/'+type+'-thumb/'+x+'.jpg" width=50/>';
		}
		container.append(html);
	});
}


// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 900
});

var active_target;
// then create layer
var layer = new Konva.Layer();

// draw the image
layer.draw();

$('html').keyup(function(e){
    if(e.keyCode == 46) {
        //alert('Delete key released');
        active_target.destroy();
        stage.find('Transformer').destroy();
        layer.draw();

    }
});

stage.on('dragstart click tap', function (e) {
	active_target = e.target;
      // if click on empty area - remove all transformers
      if (e.target === stage) {
        stage.find('Transformer').destroy();
        layer.draw();
        return;
      }

      // remove old transformers
      // TODO: we can skip it if current rect is already selected
      stage.find('Transformer').destroy();

      // create new transformer
      var tr = new Konva.Transformer();
      layer.add(tr);
      tr.attachTo(e.target);
      layer.draw();
    });


function add_text(text, color){
	var simpleText = new Konva.Text({
      x: stage.getWidth() / 2,
      y: 15,
      text: text,
      fontSize: 30,
      fontFamily: 'Staatliches',
      fill: color,
      draggable: true
    });
layer.add(simpleText);
stage.add(layer);
//layer.draw();

}

    $(function(){
    	$('.clickable-image > img').click(function(){
    		var sub = $(this).data('sub');
    		var hero = $(this).data('hero');
    		var number = $(this).data('number');
    		var ext = '.png';
    		var baseon = 'width';
    		if(sub == 'bg'){
    			ext = '.jpg';
    			baseon = 'height';
    		}
    		var file = garena_cdn + hero +'/'+ sub +'/'+number+ext;

    		add_image(file, baseon);
    	});
    	$('#tambah-text').click(function(){
    		add_text($('#text').val(), $('#text-color').val())
    	});
    	$('#download-image').click(function(){
    		stage.find('Transformer').destroy();
    		var dataURL = stage.toDataURL();
            downloadURI(dataURL, 'aov-wallpaper.png');
    	})

    });

    function add_image(file, baseon = 'width'){
    	var imageObj = new Image();
    	imageObj.setAttribute('crossOrigin', 'anonymous');
	    imageObj.onload = function() {
	    var canvas = stage.attrs;
	 var imageAspectRatio = imageObj.width / imageObj.height;
	var canvasAspectRatio = canvas.width / canvas.height;
	var renderableHeight, renderableWidth, xStart, yStart;

	// If image's aspect ratio is less than canvas's we fit on height
	// and place the image centrally along width
	if(imageAspectRatio < canvasAspectRatio || baseon =='height') {
		renderableHeight = canvas.height;
		renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
		xStart = (canvas.width - renderableWidth) / 2;
		yStart = 0;
	}

	// If image's aspect ratio is greater than canvas's we fit on width
	// and place the image centrally along height
	else if(imageAspectRatio > canvasAspectRatio) {
		renderableWidth = canvas.width
		renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
		xStart = 0;
		yStart = (canvas.height - renderableHeight) / 2;
	}

	// Happy path - keep aspect ratio
	else {
		renderableHeight = canvas.height;
		renderableWidth = canvas.width;
		xStart = 0;
		yStart = 0;
	}

	      var yoda = new Konva.Image({
	        x: xStart,
	        y: yStart,
	        image: imageObj,
	        draggable: true,
	        keepRatio: true,
	        width: renderableWidth,
	        height: renderableHeight
	      });

	      // add the shape to the layer
	      layer.add(yoda);

	      // add the layer to the stage
	      stage.add(layer);
	    };
	    imageObj.src = file;
    }


    function downloadURI(uri, name) {
            var link = document.createElement("a");
            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;
        }