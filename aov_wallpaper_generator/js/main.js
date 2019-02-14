const garena_cdn = 'https://cdngarenanow-a.akamaihd.net/webmain/static/resource/wallpaper/hero/';
const wp_data = [{"name":"toro","value":"toro","tag":"tank","skinsCount":3,"bgCount":3},{"name":"raz","value":"raz","tag":"mage","skinsCount":4,"bgCount":4},{"name":"zephys","value":"zephys","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"veera","value":"veera","tag":"mage","skinsCount":5,"bgCount":5},{"name":"violet","value":"violet","tag":"archer","skinsCount":7,"bgCount":7},{"name":"yorn","value":"yorn","tag":"archer","skinsCount":5,"bgCount":5},{"name":"omega","value":"omega","tag":"tank","skinsCount":2,"bgCount":2},{"name":"butterfly","value":"butterfly","tag":"assassin","skinsCount":7,"bgCount":7},{"name":"mina","value":"mina","tag":"tank","skinsCount":3,"bgCount":3},{"name":"azzenka","value":"azzenka","tag":"mage","skinsCount":3,"bgCount":3},{"name":"lubu","value":"lubu","tag":"warrior","skinsCount":6,"bgCount":6},{"name":"zanis","value":"zanis","tag":"warrior","skinsCount":5,"bgCount":5},{"name":"valhein","value":"valhein","tag":"archer","skinsCount":6,"bgCount":6},{"name":"thane","value":"thane","tag":"tank","skinsCount":3,"bgCount":3},{"name":"ilumia","value":"ilumia","tag":"mage","skinsCount":3,"bgCount":3},{"name":"lauriel","value":"lauriel","tag":"mage","skinsCount":5,"bgCount":5},{"name":"nakroth","value":"nakroth","tag":"assassin","skinsCount":5,"bgCount":5},{"name":"diaochan","value":"diaochan","tag":"mage","skinsCount":4,"bgCount":4},{"name":"aleister","value":"aleister","tag":"mage","skinsCount":3,"bgCount":3},{"name":"wukong","value":"wukong","tag":"assassin","skinsCount":4,"bgCount":4},{"name":"krixi","value":"krixi","tag":"mage","skinsCount":6,"bgCount":6},{"name":"gildur","value":"gildur","tag":"tank","skinsCount":2,"bgCount":2},{"name":"kahli","value":"kahli","tag":"mage","skinsCount":4,"bgCount":4},{"name":"chaugnar","value":"chaugnar","tag":"support","skinsCount":3,"bgCount":3},{"name":"ormarr","value":"ormarr","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"alice","value":"alice","tag":"support","skinsCount":3,"bgCount":3},{"name":"mganga","value":"mganga","tag":"mage","skinsCount":3,"bgCount":3},{"name":"maloch","value":"maloch","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"taara","value":"taara","tag":"tank","skinsCount":3,"bgCount":3},{"name":"preyta","value":"preyta","tag":"mage","skinsCount":3,"bgCount":3},{"name":"cresht","value":"cresht","tag":"tank","skinsCount":3,"bgCount":3},{"name":"fennik","value":"fennik","tag":"archer","skinsCount":3,"bgCount":3},{"name":"grakk","value":"grakk","tag":"tank","skinsCount":3,"bgCount":3},{"name":"natalya","value":"natalya","tag":"mage","skinsCount":5,"bgCount":5},{"name":"lumburr","value":"lumburr","tag":"support","skinsCount":2,"bgCount":2},{"name":"jinna","value":"jinna","tag":"mage","skinsCount":3,"bgCount":3},{"name":"payna","value":"payna","tag":"support","skinsCount":2,"bgCount":2},{"name":"arthur","value":"arthur","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"kriknak","value":"kriknak","tag":"assassin","skinsCount":3,"bgCount":3},{"name":"airi","value":"airi","tag":"warrior","skinsCount":6,"bgCount":6},{"name":"batman","value":"batman","tag":"assassin","skinsCount":2,"bgCount":2},{"name":"slimz","value":"slimz","tag":"archer","skinsCount":3,"bgCount":3},{"name":"skud","value":"skud","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"zuka","value":"zuka","tag":"warrior","skinsCount":5,"bgCount":5},{"name":"murad","value":"murad","tag":"assassin","skinsCount":6,"bgCount":6},{"name":"telannas","value":"telannas","tag":"archer","skinsCount":5,"bgCount":5},{"name":"Zill","value":"qier","tag":"mage","skinsCount":2,"bgCount":4},{"name":"ignis","value":"ignis","tag":"mage","skinsCount":2,"bgCount":2},{"name":"joker","value":"joker","tag":"archer","skinsCount":2,"bgCount":2},{"name":"superman","value":"superman","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"kilgroth","value":"kilgroth","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"xeniel","value":"xeniel","tag":"tank","skinsCount":3,"bgCount":3},{"name":"arduin","value":"arduin","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"Ryoma","value":"longma","tag":"warrior","skinsCount":4,"bgCount":4},{"name":"astrid","value":"aicuisi","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"moren","value":"moen","tag":"archer","skinsCount":2,"bgCount":2},{"name":"wonderwoman","value":"wonderwoman","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"tulen","value":"tulun","tag":"mage","skinsCount":5,"bgCount":5},{"name":"lindis","value":"lindi","tag":"archer","skinsCount":3,"bgCount":3},{"name":"timi","value":"timi","tag":"support","skinsCount":2,"bgCount":2},{"name":"omen","value":"yecha","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"max","value":"maikesi","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"liliana","value":"lilian","tag":"mage","skinsCount":4,"bgCount":4},{"name":"wisp","value":"lingling","tag":"archer","skinsCount":3,"bgCount":3},{"name":"arum","value":"airui","tag":"tank","skinsCount":3,"bgCount":3},{"name":"rourke","value":"luoke","tag":"warrior","skinsCount":3,"bgCount":3},{"name":"roxie","value":"nuokexi","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"baldum","value":"bodun","tag":"tank","skinsCount":2,"bgCount":2},{"name":"marja","value":"majia","tag":"mage","skinsCount":2,"bgCount":2},{"name":"emily","value":"aimili","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"annete","value":"annaite","tag":"support","skinsCount":2,"bgCount":2},{"name":"y'bneth","value":"gumu","tag":"tank","skinsCount":2,"bgCount":2},{"name":"elsu","value":"su","tag":"archer","skinsCount":3,"bgCount":3},{"name":"richter/Riktor","value":"ruike","tag":"warrior","skinsCount":2,"bgCount":2},{"name":"Sephera","value":"lan","tag":"mage","skinsCount":2,"bgCount":2},{"name":"quillen","value":"kuilun","tag":"assassin","skinsCount":2,"bgCount":2},{"name":"Darcy","value":"daerxi","tag":"mage","skinsCount":2,"bgCount":2},{"name":"Capheny","value":"kafenni","tag":"archer","skinsCount":2,"bgCount":2},{"name":"Verez","value":"feilei","tag":"warrior","skinsCount":2,"bgCount":2}];
const fonts = ['Staatliches', 'Bloodseeker', 'Miss Fajardose', 'Righteous', 'Luckiest Guy', 'Passion One', 'Bangers', 'Black Ops One', 'Arial', 'Arial Black', 'Georgia', 'Trebuchet MS', 'Courier New', 'Lucida Console', 'Comic Sans MS'];

$(function(){
	//render bg thumbs
	render_thumbnails('bg', $('#bg-wrapper > div'), '.jpg');
	//render skins thumb
	render_thumbnails('skins', $('#skin-wrapper > div'));
  //renderfonts
  render_fonts_select($('#text-font'));
});

function render_thumbnails(type, container){
	var html = '';
	var i = 1;
	$.each(wp_data, function(i, data){
		html = '';
		for(var x=1;x<=data[type+'Count'];x++){
			//html = html + 'test';
			html = html + '<img title="'+data['name'].toUpperCase()+'" data-hero="'+data['value']+'" data-number='+x+' data-sub="'+type+'" class="'+type+' '+type+'-'+data['value']+'" src="'+garena_cdn+data['value']+'/'+type+'-thumb/'+x+'.jpg" width=50/>';
		}
		container.append(html);
	});
}

function render_fonts_select(container){
  var font_options = '';
  $.each(fonts, function(i, v){
    font_options = font_options + '<option value="'+v+'">'+v+'</option>';
  });
  container.html(font_options);
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


function add_text(text, color = 'orange', font = 'arial'){
	var simpleText = new Konva.Text({
      x: stage.getWidth() / 2,
      y: 15,
      text: text,
      fontSize: 30,
      fontFamily: font,
      fill: color,
      draggable: true
    });
layer.add(simpleText);
stage.add(layer);
//layer.draw();

}

    $(function(){
    	$('.clickable-image > div > img').click(function(){
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
    		add_text($('#text').val(), $('#text-color').val(), $('#text-font').val())
    	});
    	$('#download-image').click(function(){
    		stage.find('Transformer').destroy();
    		downloadCanvas('aov-wallpaper.png');
    	});

    	$('#filter-hero').on('change keyup paste', function(){
    		if($(this).val() === ''){
    			$('#skin-wrapper > div > img').show();
    		}else{
    			$('#skin-wrapper > div > img').hide();
    			$('#skin-wrapper > div > img').filter(function(){ return $(this).attr('title').toLowerCase().includes($('#filter-hero').val());}).show();
    		}
    	});

      $('#text, #text-color, #text-font').on('change keyup paste', function(){
        var text  = $('#text').val();
        var color = $('#text-color').val();
        var font = $('#text-font').val();
        set_preview_text(text, color, font);
      });
    });

    function set_preview_text(text = '', color = 'black', font = 'arial'){
      if(text == ''){
        $('#text-prev-wrapper').html('');
        return;
      }

      $('#text-prev-wrapper').html('<center>Preview: <br /><span style="font-size:35px;color:'+color+';font-family: \''+font+'\">'+text+'</span></center>');
    }

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


var downloadCanvas =    function(name){
    var link = document.createElement("a");
      var imgData = stage.toDataURL({pixelRatio: 2 });
      var strDataURI = imgData.substr(22, imgData.length);
      var blob = dataURLtoBlob(imgData);
      var objurl = URL.createObjectURL(blob);

      link.download = name;

      link.href = objurl;
     link.click();
} 

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
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