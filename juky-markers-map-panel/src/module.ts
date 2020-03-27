import { PanelPlugin } from '@grafana/data';
import { PluginEditor } from './PluginEditor';
import { PluginPanel } from './PluginPanel';
import { defaults, PluginOptions } from './types';

export const plugin = new PanelPlugin<PluginOptions>(PluginPanel).setDefaults(defaults).setEditor(PluginEditor);
