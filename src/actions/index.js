/**
 * Created by Пользователь on 19.10.2017.
 */
import areasActions from './areas';
import mainDataActions from './mainData';
import vacancyActions from './vacancy';

let coreActions = {};
coreActions = {...coreActions, ...areasActions, ...mainDataActions, ...vacancyActions};


export default coreActions;
