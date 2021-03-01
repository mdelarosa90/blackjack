const miModulo = (() => {
	'use strict';
	let e = [];
	const t = [ 'C', 'D', 'H', 'S' ],
		n = [ 'A', 'J', 'Q', 'K' ];
	let r = [];
	const o = document.querySelector('#btnPedir'),
		a = document.querySelector('#btnDetener'),
		l = document.querySelector('#btnNuevo'),
		s = document.querySelectorAll('.divCartas'),
		d = document.querySelectorAll('small'),
		c = (t = 2) => {
			(e = i()), (r = []);
			for (let e = 0; e < t; e++) r.push(0);
			(o.disabled = !1), (a.disabled = !1), s.forEach((e) => (e.innerHTML = null)), d.forEach((e) => (e.innerHTML = 0));
		},
		i = () => {
			e = [];
			for (let n = 2; n <= 10; n++) for (let r of t) e.push(n + r);
			for (let r of t) for (let t of n) e.push(t + r);
			return _.shuffle(e);
		},
		u = () => {
			if (0 === e.length) throw 'No hay cartas en el deck';
			return e.pop();
		},
		m = (e, t) => (
			(r[t] += ((e) => {
				const t = e.substring(0, e.length - 1);
				return isNaN(t) ? ('A' === t ? 11 : 10) : Number(t);
			})(e)),
			(d[t].innerText = r[t]),
			r[t]
		),
		h = (e, t) => {
			const n = document.createElement('img');
			(n.src = `assets/cartas/${e}.png`), n.classList.add('carta'), s[t].append(n);
		},
		b = (e) => {
			let t = 0;
			do {
				const e = u();
				(t = m(e, r.length - 1)), h(e, r.length - 1);
			} while (t < e && e <= 21);
			(() => {
				const [ e, t ] = r;
				setTimeout(() => {
					t === e
						? alert('Nadie gana :(')
						: e > 21 ? alert('Computadora Gana') : t > 21 ? alert('Jugador gana') : alert('Computadora Gana');
				}, 100);
			})();
		};
	return (
		o.addEventListener('click', () => {
			const e = u(),
				t = m(e, 0);
			h(e, 0),
				t > 21
					? (console.warn('Lo siento mucho, perdiste'), (o.disabled = !0), (a.disabled = !0), b(t))
					: 21 === t && (console.warn('21, Genial!'), (o.disabled = !0), (a.disabled = !0), b(t));
		}),
		a.addEventListener('click', () => {
			(o.disabled = !0), (a.disabled = !0), b(r[0]);
		}),
		l.addEventListener('click', () => {
			c();
		}),
		{ nuevoJuego: c }
	);
})();
