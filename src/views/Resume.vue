<template>
	<section class="resume">
		<!-- Personal Info -->
		<address class="info">
			<p>1740 Depew St. Edgewater, CO</p>
			<a href="mailto:jonnmb@gmail.com">jonnmb@gmail.com</a>
			<a href="tel:+01-435-862-1179">(435)862-1179</a>
		</address>

		<!-- Summary -->
		<div class="summary">
			<h2>Summary</h2>
			<p>
				I am a full-stack developer familiar with a variety of platforms and languages. I’m experienced with the entire application
				lifecycle from the conception of the application, development, all the way to the deployment.
			</p>
		</div>

		<!-- Skills -->
		<div class="skills">
			<h2>Skills</h2>
			<ul>
				<li>Languages: Javascript, Typescript, Java</li>
				<li>Frameworks: Angular, Vue, Bootstrap, Materialize</li>
				<li>System: Linux, OSX, Windows, Node</li>
				<li>Other: HTML, CSS, SASS/SCSS, REST, Accessibility Compliance</li>
			</ul>
		</div>

		<!-- Employment History -->
		<div class="employment-history">
			<h2>Employment History</h2>
			<div class="grid">
				<template v-for="(job, index) in jobs">
					<div :key="job.name">
						<h3 :id="'job-name-' + index">{{ job.name }}</h3>
						<p>{{ job.title }}</p>
						<p>{{ job.startDate }} - {{ job.endDate }}</p>
					</div>
					<ul :key="index" :aria-labelledby="'job-name-' + index">
						<li v-for="item in job.infoList" :key="item">
							<plus-square-icon></plus-square-icon>
							<span>{{ item }}</span>
						</li>
					</ul>
				</template>
			</div>
		</div>

		<!-- Education -->
		<div class="education-history">
			<h2>Education</h2>
			<div class="grid">
				<template v-for="(school, index) in schools">
					<div :key="school.name">
						<h3 :id="'school-name-' + index">{{ school.name }}</h3>
						<p>{{ school.degree }}</p>
						<p>{{ school.startDate }} - {{ school.endDate }}</p>
					</div>
					<ul :key="index" :aria-labelledby="'school-name-' + index">
						<li v-for="item in school.infoList" :key="item">
							<plus-square-icon></plus-square-icon>
							<span>{{ item }}</span>
						</li>
					</ul>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
import { PlusSquareIcon } from 'vue-feather-icons';
import employment from '../assets/employment.json';
import education from '../assets/education.json';

export default {
	components: {
		PlusSquareIcon
	},
	data() {
		return {
			jobs: employment.jobs,
			schools: education.schools
		};
	},
	name: 'resume'
};
</script>

<style lang="scss" scoped>
.resume {
	width: 80vw;
	@media only screen and (max-width: 767px) {
		width: 95vw;
	}
	max-width: 1080px;
	margin: 0 auto;
	background-color: #fafafa;
	padding: 1rem;
	font-family: 'Roboto', sans-serif;
	div {
		margin-bottom: 0.75rem;
	}
	.info {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-bottom: 0;
		font-size: 0.8rem;
	}
	.summary > p {
		padding-left: 0.2rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@media only screen and (max-width: 767px) {
			grid-template-columns: 1fr 1.5fr;
		}
		grid-auto-rows: auto;
		gap: 1rem 0.5rem;
		padding: 0 0.2rem;
		ul {
			padding: 0 1rem;
			border-left: 1px solid rgba(0, 0, 0, 0.25);
			li {
				margin-bottom: 0.3rem;
				svg {
					margin-right: 0.5rem;
					height: 1rem;
					width: 1rem;
				}
				span {
					vertical-align: middle;
				}
			}
			@media only screen and (max-width: 767px) {
				font-size: 11px;
				padding: 0 0.5rem;
			}
		}
	}
}
h1,
h2,
h3 {
	color: #009688;
	font-weight: bolder;
	margin: 0;
}
h3 {
	font-weight: normal;
	@media only screen and (max-width: 767px) {
		font-size: 1.25rem;
	}
}
p {
	margin: 0;
	padding: 0;
}
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
