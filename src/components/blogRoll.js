import React, {Component} from 'react'

export default class BlogRoll extends Component {

	constructor() {
		super()
		this.state = {
			posts: [{
				title: 'The best story you ever heard',
				content: 'Bacon ipsum dolor amet pork filet mignon jerky hamburger shoulder tri-tip pork chop. Shank venison jowl turducken andouille, pork loin chicken landjaeger. Sausage prosciutto corned beef, tri-tip bresaola andouille kielbasa sirloin swine bacon. Turkey doner boudin landjaeger turducken, filet mignon cupim jerky kevin frankfurter short loin corned beef t-bone. Boudin chuck prosciutto kielbasa, pork loin turducken ham picanha pastrami strip steak andouille leberkas ham hock bacon alcatra. Andouille boudin rump, capicola sirloin short loin pancetta. Capicola short loin turkey filet mignon boudin spare ribs jerky pig pork loin pastrami alcatra.',
				tags: ['foo', 'bar', 'lorum']
			},
			{
				title: 'Another good story',
				content: 'Well I woke up to get me a cold pop and then I thought somebody was barbequing. I said oh lord Jesus it’s a fire. Then I ran out, I didn’t grab no shoes or nothin’ lord Jesus, I ran for my life. And then the smoke gagged me, I got bronchitis ain’t nobody got time for that.',
				tags: []
			}]
		}
	}

	render() {
		return (
			<ul className="blogRoll">
				{this.state.posts.map( (post, i) => {
					return (
						<li className="blogRoll-item" key={`post-${i}`}>
							<article>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
								<ul className="tag-list">
									{post.tags.map( tag => {
										return (
											<li className="tag-item" key={`tag-${tag}`}>{tag}</li>
										)
									})}
								</ul>
							</article>
						</li>
					)
				})}
			</ul>
		)
	}
}