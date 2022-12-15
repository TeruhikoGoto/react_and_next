// メソッド呼び出しパターン1
const object = {
  value: 'test',
  method1: function () {
    return this;//①何が返されるでしょう？
  },
  method2: function () {
    return this.value;//②何が返されるでしょう？
  }
};
//① thisはobject自身を参照している
console.log(object.method1());//{ value: 'test', method: [Function: method] }
//② thisはobject自身を参照しているので、valueプロパティにもアクセスできる
console.log(object.method2());// test

// メソッド呼び出しパターン2
const guitarObject = {
  maker: "Fender",
  model: "Telecaster",
  year: 1964,
  color: 'Black',
  showMaker: function() {
      console.log(this.maker);
  }
};
guitarObject.showMaker();//Fender

// メソッドは何かしらのオブジェクトに属しています。(JavaScriptでは、オブジェクトのプロパティとして定義される関数の事をメソッドと呼ぶ)
// メソッド呼び出しパターンでは、thisは関数を呼び出すオブジェクトを参照する、という事が分かりますね。

// 続いて、関数呼び出しパターン
function showMaker() {
  this.maker = 'Gibson';
  console.log(this);
}

showMaker();
// ブラウザならwindowオブジェクト
// Node.jsならglobalオブジェクトとなります。
// この場合のthisはグローバルオブジェクトを参照します。グローバルオブジェクトは、実行環境において、異なるものが定義されます(windowオブジェクト/globalオブジェクト)。

// この事からも分かるように、普通の関数(アロー関数でない関数)の場合、thisの定義は定義した時点でなく、実行時に決まります。(←ここ重要)

const arrow = () => {
  return this
}

const lexicalThis = this

console.log(arrow())
// 関数定義したタイミングで、関数の外側のthisを参照する
console.log(arrow() === lexicalThis) //=> true

this.name = 'bar'

const foo = {
	name: 'foo',
	regular: function () {
		return this.name
	},
	arrow: () => {
		return this.name
	}
}

console.log(foo.regular()) //=> foo
console.log(foo.arrow()) //=> bar
