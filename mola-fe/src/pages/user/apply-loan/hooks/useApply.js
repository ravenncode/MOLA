import { useState } from "react";
import { useNavigate } from "react-router-dom";
//3rd party libraries
import axios from "axios";
import swal from 'sweetalert';
//Custom components
import Configs from "../../../../utils/Configs";
import "../../../styles.css";

const useApply = () => {
	const { API } = Configs();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handlePost = (data) => {

		const template = "This action cannot be reversed once submitted. <br /> Do you want to keep going?"

		swal({
			title: "Confirm submit?",
			content: {
				element: 'p',
				attributes: {
					innerHTML: `${template}`,
				}
			},
			buttons: ["No", "Yes"],
			// buttons: true,
			dangerMode: true,
		})
			.then((willUpdate) => {
				if (willUpdate) {
					setIsLoading(prev => !prev);

					axios.post(API + 'loan/add_loan', data).then((response) => {
						setIsLoading(prev => !prev);
						if (response.data.error) {
							swal({
								icon: "danger",
								title: "Opps! Something went wrong",
								text: "Please try again later.",
								buttons: false,
								timer: 2000,
							});
						} else {
							swal({
								icon: "success",
								title: "Success!",
								text: "Loan application submitted.",
								buttons: false,
								timer: 2000,
							});
							setTimeout(() => {
								navigate('/home');
							}, 1500)
						}
					});
				} else {
					swal.close();
				}
			});


	}

	return { handlePost, isLoading }
}

export default useApply;