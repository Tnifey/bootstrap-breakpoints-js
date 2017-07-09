class BootstrapBreakpoints {

	constructor() {
		this.xs = 0;
		this.sm = 576;
		this.md = 768;
		this.lg = 992;
		this.xl = 1200;

		this.target = false;

		this.init();
	}

	init() {
		if(!this.target)
			this.show();
		this.change();
		window.addEventListener('resize', () => {
			this.change();
		});
	}

	change() {
		var w = window.innerWidth;
		switch (true) {
			case (w >= this.xl):
				this.set('XL');
			break;
			case (w >= this.lg):
				this.set('LG');
			break;
			case (w >= this.md):
				this.set('MD');
			break;
			case (w >= this.sm):
				this.set('SM');
			break;
			default:
				this.set('XS');
			break;
		}
	}

	set(val) {
		if(!!this.target)
			this.target.innerText = val;
	}

	show() {
		this.target = document.createElement('div');
		this.target.setAttribute('id', '__bootstrap_breakpoints__');
		this.target.style = 'position: fixed; bottom: 0; right: 0; background: #617; color: #fff; padding: .2rem .4rem; font-family: monospace; font-weight: 700; border-radius: 10px 0 0 0';
		this.target.innerText = "sm";
		document.body.appendChild(this.target);
	}

	hide() {
		this.target.parentElement.removeChild(this.target);
		this.target = false;
	}

}

export default new BootstrapBreakpoints;