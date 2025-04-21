'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 100,
})
.move(-12)
.type('the Developer, ')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('プロントエンド開発者　金です。')
.pause(1000)
.move(-8)
.delete(10)
.type('バックエンド')
.pause(1000)
.delete(6)
.type('フルスタック')
.pause(1000)
.move(8)
.delete()
.go();