import React from 'react';
import PropTypes from 'prop-types';

import './tab.styles.css';

class Tabs extends React.Component {
	static propTypes = {
		active: PropTypes.string.isRequired,
		onChange: PropTypes.func,
	};
	render() {
		return (
			<div className="tab-styles">
				<div className="Tabs">
					<div className="Tabs_container">
						{React.Children.map(this.props.children, (child, i) => {
							let className = `tabs_item`;
							if (child.key === this.props.active) {
								className = `${className} tabs_item-active`;
							}
							return (
								<div
									className={className}
									onClick={() => {
										this.props.onChange(child.key);
									}}
								>
									{child}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Tabs;
