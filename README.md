<<<<<<< HEAD
## Open Prescription
#### Open Prescription is a system for authenticating and signing medical prescriptions by validated doctors using a digital certificate and drug dispensing tracking

The idea grew during the COVID-19 pandemic, and because of quarantines, visiting doctors could put people in risk of being contaminated.

As many countries lack about telemedicine or have treatments prescriptions on paper yet, we designed a simple platform that can be deployed as a crisis response at the same time mitigates frauds on prescriptions and drug dispensing.

The platform has a simple flow for the 3 defined main actors: doctor, patient and pharmacist.

### Premises:
* Privacy: Must preserve the privacy of the medical prescriptions of the patient,
* Confidentiality: Just the parties involved should access the content,
* Proof-of-Authenticity: All the generated data must be authenticated to prove the integrity of all documents,
* Proof-of-Authorship: The doctor must sign the prescription with a validated identity and using a digital certificate,
* Proof-of-Consent: Every time personal data is requested, the owner should agree, and the consent must be verifiable,
* Traceability: All actions must be trackable and auditable,
* Transparency: The platform must be transparent and verifiable to leverage the Trust during the whole process

### Digital Identity
A digital identity is needed for signing the prescriptions and authorising the drug dispensing.

The digital signatures are made with a digital certificate, initially blockchain-based.

The digital signatures are compatible with open standards and can be verified in different platforms

### Blockchain
Used to authenticate the prescriptions and provide access to a traceability layer for governments and regulators.

Documents authenticated on blockchain have a timestamp and can be verified at any time.

#### Smart-contracts
It can't be considered a smart-contract, but a repository of all activities of drug dispensing, on an anonymised form. It will be used by governments and regulators to track prescriptions and drug dispensing acts.

No documents, contents or personally identifiable information should be exposed on blockchain for privacy and confidentiality purposes, in respect of GDPR (Europe) and countries like Brazil (LGPD)

### Validating Doctors
Through countries API's or platforms to check the doctor speciality and their registry number.


### Sequence diagram
![docs/Open%20Prescriptions%20User%20Flow.png](https://raw.githubusercontent.com/OpenPrescription/openprescription/master/docs/Open%20Prescriptions%20User%20Flow.png)

### To do
* Encrypted (and desirable decentralised) storage plugin
* Digital signatures by the pharmacist
* Smart-contract(s) for activities repository. Should contain only anonimised data to be verified by governments, entities and regulators.

### Sponsors, partnerships and contributors
* [OriginalMy](https://originalmy.com)
* [E-Pro Saúde](http://e-prosaude.com.br)
* [Digital Republic](https://digitalrepublic.com.br/)


### License
Apache 2
=======
# OpenPrescription Doctor Client

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
>>>>>>> development
