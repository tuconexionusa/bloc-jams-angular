(function(){
  function Fixtures() {
    var Fixtures = {}
    var albumPicasso = {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtURL: 'assets/images/album_covers/01.png',
        songs: [
            {
              title: 'Blue',
              duration: '161.71',
              audioUrl: '/assets/music/blue'
            },
            {
              title: 'Green',
              duration: '103.96',
              audioUrl: '/assets/music/green'
            },
            {
              title: 'Red',
              duration: '268.45',
              audioUrl: '/assets/music/red'
            },
            {
              title: 'Pink',
              duration: '153.14',
              audioUrl: '/assets/music/pink'
            },
            {
              title: 'Magenta',
              duration: '374.22',
              audioUrl: 'assets/music/magenta'
            }
        ]
    };

    var albumMarconi = {
        title: 'The Telephone',
        artist: 'Guglielmo Marconi',
        label: 'EM',
        year: '1909',
        albumArtURL: 'assets/images/album_covers/20.png',
        songs: [
            {
              title: 'Hello Operator?',
              duration: '4:26'
            },
            {
              title: 'Ring, ring, ring',
              duration: '3:14'
            },
            {
              title: 'Fits in your pocket',
              duration: '5:01'
            },
            {
              title: 'Can you hear me now?',
              duration: '3:21'
            },
            {
              title: 'Wrong phone number',
              duration: '2:15'
            },
            {
              title: 'Bye Bye',
              duration: '2:15'
            },
            {
              title: 'Bye Bye',
              duration: '2:15'
            }
        ]
    };

    Fixtures.getAlbum = function(){
      return albumPicasso;
    };

    Fixtures.getCollection = function(numberOfAlbums){
      this.albums = [];
      for (var i=0; i < numberOfAlbums; i++){
        this.albums.push(angular.copy(albumPicasso));
      }
      return this.albums;
    }

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);

})();
