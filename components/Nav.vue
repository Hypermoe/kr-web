<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light nav">
		<a class="navbar-brand" href="/"><span style="font-family: CaviarDreams;font-size:23px">Kawaiirori</span><!--<img src="#" alt="" class="logo">--></a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav mr-auto me-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/">主页</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
@font-face {
    font-family: 'CaviarDreams';
    src: url('https://res.hypermoe.com/data/font/CaviarDreams_Bold.ttf');
}
.nav {
    padding: .5rem 1rem;
}
@media all and (min-width: 1024px) {
    .nav {
        border-radius: 10px;
        width: calc(100% - 4rem);
        position: fixed;
        top: 1rem;
        left: 2rem;
        z-index: 20;
        box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
    }
}

</style>