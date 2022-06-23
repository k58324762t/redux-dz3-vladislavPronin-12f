import React from 'react'
import { connect } from 'react-redux'
import { changeInput } from '../redux/action/actions'
import { addUserAction } from '../redux/action/actions'
class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.changeInputFunc = this.changeInputFunc.bind(this)
		this.addUserFunc = this.addUserFunc.bind(this)
	}

	changeInputFunc(e) {
		const data = {
			value: e.target.value,
			name: e.target.name,
		}

		this.props.changeInput(data)
	}

	addUserFunc() {
		this.props.addUserAction(this.props.data.name)
	}

	render() {
		return (
			<div>
				<input type='numbers' name='name' onChange={this.changeInputFunc} />
				<button onClick={this.addUserFunc}>add user</button>

				<ul>
					{this.props.users.map((user, key) => {
						;<li key={key}>{user}</li>
					})}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state.input.data,
		users: state.users.users,
	}
}

const mapDispatchToProps = {
	changeInput,
	addUserAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
