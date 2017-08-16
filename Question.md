##开发过程中问题记录：
1.Uncaught Error: bindActionCreators expected an object or a function, instead received undefined. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?
    bindActionCreators的作用是将dispatch和{action}绑定，要求action是一个object，因此在对action进行声明时,均非default的export；进行import时，直接引入*并将其设置别名。调用时，直接按照object的调用形式调用action的各方法就行了。


2.Uncaught ReferenceError: dispatch is not defined
    需要在action里引入whatwg-fetch
    npm install --save-dev whatwg-fetch


3.Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
    同第一个问题


4.Uncaught RangeError: Maximum call stack size exceeded
    同一个组件自身反复调用的问题。将<button></button>误写成<Button></Button>