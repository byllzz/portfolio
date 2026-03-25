import React from 'react'
import StackList from './StackList';
import SkillsTitle from './SkillsTitle';
import Talk from '../../components/Talk'

export default function SkillsPage() {
    return (
      <div>
        <SkillsTitle />
        <StackList />
        <Talk />

      </div>
    );
  }

